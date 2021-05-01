import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

export async function handleRequest(request: Request): Promise<Response> {

  return new Response(dayjs.tz(new Date(), "Europe/Paris").format())
}
