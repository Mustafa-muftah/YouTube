import { chromium, test } from "@playwright/test";

export async function failTestIfUnexpectedErrorLogs(
  testName: string,
  errorLogs: string[],
  networkLogs: string[],
  context: any,
  browser: any,
  expectedErrorLength: number
) {
  console.log(`${testName} errorLogs with length: ${errorLogs.length}`);
  if (errorLogs.length > expectedErrorLength) {
    test.fail();
    console.log(`errorLogs: ${errorLogs}`);
    console.log("Failing because more error exist than expected");
    console.log(
      `${testName} networkLogs with length: ${networkLogs.length} networkErrors: ${networkLogs}`
    );
  } else {
    // await context.close();
    // await browser.close();
  }
}

export async function runPageTest(
  testName: string,
  expectedErrorLength: number,
  textExecution: any,
  log: boolean = false
) {
  let browser = await chromium.launch();
  const errorLogs: string[] = [];
  const networkLogs: string[] = [];

  const context = await browser.newContext();

  const page: any = await context.newPage();
  await page.on("console", (message: any) => {
    if (message.type() === "error") {
      errorLogs.push(message.text());
    }
    if (log) console.log("console message =>", message);
  });
  page.on("request", (request: any) => {
    networkLogs.push(`>>${request.method()}, ${request.url()}`);
    if (log) console.log("request message =>", request.method(), request.url());
  });
  page.on("response", (response: any) => {
    networkLogs.push(`<<${response.status()}, ${response.url()}`);
    if (log)
      console.log("response message =>", response.status(), response.url());
  });
  await textExecution(page);

  failTestIfUnexpectedErrorLogs(
    testName,
    errorLogs,
    networkLogs,
    context,
    browser,
    expectedErrorLength
  );
  page.close();
}

