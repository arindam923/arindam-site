
import { neon } from "@neondatabase/serverless";

export const sql = neon(
    "postgresql://website_owner:LS2hca3oAXqU@ep-blue-scene-a16tgo36.ap-southeast-1.aws.neon.tech/website?sslmode=require"
);