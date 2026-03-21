import { auroraKey } from "@lib/aurora";
import { externalKey, greeting } from "@lib/external";
import { nebulaKey } from "@lib/nebula";
import { zenithKey } from "@lib/zenith";

export const key = `${auroraKey}-${nebulaKey}-${zenithKey}`;
console.log(`Started application: ${key} - ${greeting(externalKey)}`);
