import { useContext, useEffect, useState } from "react";

import style from "./PageLoadingComponent.module.scss";

export const PageLoadingComponent = ({
	pageLoading,
	message = undefined,
	darken = false,
	assets,
}: {
	pageLoading: boolean;
	message?: boolean | undefined;
	darken?: boolean;
	assets?: Function;
}) => {
	const [textMessage, setTextMessage] = useState("");

	useEffect(() => {
		console.log("[TOAST ] => ", textMessage);
	}, [textMessage]);

	return (
		<div
			className={`${style["page-loader-container"]} ${
				!pageLoading ? style["page-loader-hidden"] : ""
			}${darken ? ` ${style["darken-loader"]}` : ""}`}>
			<h5 className={`${style["page-loader-text"]}`}>
				{message ? textMessage : ""}
			</h5>
		</div>
	);
};
