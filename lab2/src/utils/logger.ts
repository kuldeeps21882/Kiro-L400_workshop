export enum LogLevel {
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
}

export function log(level: LogLevel, message: string, context?: Record<string, unknown>): void {
  const timestamp = new Date().toISOString();
  const entry = { timestamp, level, message, ...context };
  console.log(JSON.stringify(entry));
}
