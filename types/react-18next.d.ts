import { resources } from "../src/i18n/index";

declare module "react-i18next" {
	interface CustomTypeOptions {
		resources: (typeof resources)["en"];
	}
}
