import Image from "next/image";
import { useRouter } from "next/router";
import {
	EventHandler,
	MouseEventHandler,
	SyntheticEvent,
	useContext,
	useEffect,
	useState,
} from "react";
import US from "../../public/assets/img/ENG.svg";
import AR from "../../public/assets/img/ES.svg";
import { langConf } from "../../utils/langConfig";

import style from "./LanguageSelectorComponent.module.scss";

export const LanguageSelectorComponent = ({
	type,
	device,
	locale,
	setPageLoading,
}: {
	type: string;
	device?: string;
	locale: string;
	setPageLoading: Function;
}) => {
	const [language, setLanguage] = useState<string>(
		locale === "es" ? "ES" : locale.toLowerCase() === "en-us" ? "ENG" : ""
	);
	const router = useRouter();

	/* 	useEffect(() => {
		if (router.locale !== language) {
			setLanguage(`${router.locale}`);
			console.log(router);
		}
	}, [router.locale]);
 */
	useEffect(() => {
		console.log("[LANG] => ", language);
		handleMenuConstruction(language);
	}, [language]);

	const handleSelectLang: MouseEventHandler = async (e: SyntheticEvent) => {
		const target = e.target as HTMLElement;
		console.log("[ROUTER]");

		console.log(router);

		if (target.id.toLowerCase() === langConf.ES_LANG.toLowerCase()) {
			setPageLoading(true);
			setLanguage(langConf.ES_LANG);
			router.push(
				`${
					router.query.hasOwnProperty("id")
						? `${router.route.replaceAll("[[...id]]", "")}/${
								router.query.id
						  }`
						: router.route
				}`,
				`${
					router.query.hasOwnProperty("id")
						? `${router.route.replaceAll("[[...id]]", "")}/${
								router.query.id
						  }`
						: router.route
				}`,
				{ locale: "es", scroll: false }
			);
			console.log("SELECTING ES");
		} else if (
			target.id.toLowerCase() === langConf.ENG_LANG.toLowerCase()
		) {
			setPageLoading(true);
			setLanguage(langConf.ENG_LANG);
			router.push(
				`${
					router.query.hasOwnProperty("id")
						? `${router.route.replaceAll("[[...id]]", "")}/${
								router.query.id
						  }`
						: router.route
				}`,
				`${
					router.query.hasOwnProperty("id")
						? `${router.route.replaceAll("[[...id]]", "")}/${
								router.query.id
						  }`
						: router.route
				}`,
				{ locale: "en-US", scroll: false }
			);
			console.log("SELECTING ENG");
		}
	};

	const handleMenuConstruction = (lang: string) => {
		console.log("[STATE-LANGUAGE]", lang);

		if (lang.toLowerCase() === langConf.ES_LANG.toLowerCase()) {
			return (
				<>
					<button
						className={`${style["lang-selector-btn"]} ${
							language?.toLowerCase() ===
							langConf.ES_LANG.toLowerCase()
								? `${style["active-selector-btn"]}`
								: ""
						} ${
							language?.toLowerCase() ===
							langConf.ENG_LANG.toLowerCase()
								? `${style["inactive-selector-btn"]}`
								: ""
						}`}
						id={langConf.ES_LANG}
						onClick={handleSelectLang}>
						<div
							className={`${style["lang-selector-btn-text"]} ${
								style[`${type}-btn-text`]
							}`}>{`${langConf.ES_LANG}`}</div>
					</button>
					<button
						className={`${style["lang-selector-btn"]} ${
							language?.toLowerCase() ===
							langConf.ENG_LANG.toLowerCase()
								? `${style["active-selector-btn"]}`
								: ""
						} ${
							language?.toLowerCase() ===
							langConf.ES_LANG.toLowerCase()
								? `${style["inactive-selector-btn"]}`
								: ""
						}`}
						id={langConf.ENG_LANG}
						onClick={handleSelectLang}>
						<div
							className={`${style["lang-selector-btn-text"]} ${
								style[`${type}-btn-text`]
							}`}>{`${langConf.ENG_LANG}`}</div>
					</button>
				</>
			);
		} else if (lang.toLowerCase() === langConf.ENG_LANG.toLowerCase()) {
			return (
				<>
					<button
						className={`${style["lang-selector-btn"]} ${
							language?.toLowerCase() ===
							langConf.ENG_LANG.toLowerCase()
								? `${style["active-selector-btn"]}`
								: ""
						} ${
							language?.toLowerCase() ===
							langConf.ES_LANG.toLowerCase()
								? `${style["inactive-selector-btn"]}`
								: ""
						}`}
						id={langConf.ENG_LANG}
						onClick={handleSelectLang}>
						<div
							className={`${style["lang-selector-btn-text"]} ${
								style[`${type}-btn-text`]
							}`}>{`${langConf.ENG_LANG}`}</div>
					</button>
					<button
						className={`${style["lang-selector-btn"]} ${
							language?.toLowerCase() ===
							langConf.ES_LANG.toLowerCase()
								? `${style["active-selector-btn"]}`
								: ""
						} ${
							language?.toLowerCase() ===
							langConf.ENG_LANG.toLowerCase()
								? `${style["inactive-selector-btn"]}`
								: ""
						}`}
						id={langConf.ES_LANG}
						onClick={handleSelectLang}>
						<div
							className={`${style["lang-selector-btn-text"]} ${
								style[`${type}-btn-text`]
							}`}>{`${langConf.ES_LANG}`}</div>
					</button>
				</>
			);
		}
	};

	useEffect(() => {}, [language, type]);

	return (
		<div
			className={`${
				device === "mobile"
					? style[`${device}-lang-selector`]
					: style["lang-selector"]
			} ${style[`${type}-lang-selector`]} `}>
			<div
				className={`${style["lang-selector-container"]} ${
					device === "mobile" ? style[`${type}-lang-container`] : ""
				}`}>
				{device !== "mobile" ? (
					handleMenuConstruction(language)
				) : (
					<>
						<button
							className={`${style["lang-selector-btn"]} ${
								language?.toLowerCase() ===
								langConf.ES_LANG.toLowerCase()
									? `${style["active-selector-btn"]}`
									: ""
							} ${
								language?.toLowerCase() ===
								langConf.ENG_LANG.toLowerCase()
									? `${style["inactive-selector-btn"]}`
									: ""
							}`}
							id={langConf.ES_LANG}
							onClick={handleSelectLang}>
							<div
								className={`${
									style["lang-selector-btn-text"]
								} ${
									style[`${type}-btn-text`]
								}`}>{`${langConf.ES_LANG}`}</div>
						</button>
						<button
							className={`${style["lang-selector-btn"]} ${
								language?.toLowerCase() ===
								langConf.ENG_LANG.toLowerCase()
									? `${style["active-selector-btn"]}`
									: ""
							} ${
								language?.toLowerCase() ===
								langConf.ES_LANG.toLowerCase()
									? `${style["inactive-selector-btn"]}`
									: ""
							}`}
							id={langConf.ENG_LANG}
							onClick={handleSelectLang}>
							<div
								className={`${
									style["lang-selector-btn-text"]
								} ${
									style[`${type}-btn-text`]
								}`}>{`${langConf.ENG_LANG}`}</div>
						</button>
						<div
							className={`${
								style["lang-selector-active-background"]
							} ${
								language?.toLowerCase() ===
								langConf.ES_LANG.toLowerCase()
									? `${style["left-highlight-active"]}`
									: `${style["right-highlight-active"]}`
							}`}></div>
					</>
				)}
			</div>
		</div>
	);
};
