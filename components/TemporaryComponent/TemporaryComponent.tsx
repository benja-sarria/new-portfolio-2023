import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { SyntheticEvent, useEffect, useState } from "react";
import style from "./TemporaryComponent.module.scss";

export const TemporaryComponent = () => {
	const temporaryTranslations = useTranslations("temporaryComponent");
	const [playGame, setPlayGame] = useState<boolean>(false);
	const [playMusic, setPlayMusic] = useState<boolean>(false);

	const [selectedTemp, setSelectedTemp] = useState<"game" | "music">("game");

	return (
		<div className={style["temporary-container"]} id={"temporarySection"}>
			<div className={style["temporary-heading-container"]}>
				<div className={style["temporary-img-container"]}>
					<Image
						src={"/assets/img/figures/space-unknown.webp"}
						alt=""
						fill
					/>
				</div>
				<div className={style["temporary-text-contents"]}>
					<h2 className={style["temporary-title"]}>
						{temporaryTranslations.rich("componentHeading.title", {
							break: () => {
								return <br />;
							},
							hyperlink: (children: any) => {
								return <span>{children}</span>;
							},
						})}
					</h2>
					<p className={style["temporary-description"]}>
						{temporaryTranslations.rich(
							"componentHeading.description",
							{
								break: () => {
									return <br />;
								},
								hyperlink: (children: any) => {
									return (
										<Link
											href={
												"https://github.com/basicallydan/skifree.js/"
											}
											className={
												style["color-link-style"]
											}>
											&quot;{children}&quot;
										</Link>
									);
								},
							}
						)}
					</p>
				</div>
			</div>
			{selectedTemp === "game" ? (
				<div className={style["iframe-game-container"]}>
					{playGame ? (
						<iframe
							src="https://basicallydan.github.io/skifree.js/"
							style={{
								top: "0px",
								left: "0px",
								width: "100%",
								height: "100%",
								border: "none",
								overflow: "hidden",
							}}
							id={"skifree-canvas"}></iframe>
					) : (
						<></>
					)}
					<div
						className={`${
							style["iframe-placeholder-outer-container"]
						}${playGame ? ` ${style["hide-placeholder"]}` : ""}`}>
						<div className={style["iframe-placeholder-container"]}>
							<Image
								src={
									"/assets/img/figures/Skifree-placeholder.webp"
								}
								alt="skifree placeholder"
								fill
							/>
						</div>
						<div
							className={
								style["iframe-placeholder-button-overlay"]
							}>
							<p className={style["iframe-placeholder-details"]}>
								{temporaryTranslations.rich(
									"gameIframe.details",
									{
										break: () => {
											return <br />;
										},
									}
								)}
							</p>
							<button
								className={style["iframe-placeholder-button"]}
								onClick={(evt: SyntheticEvent) => {
									setPlayGame(true);
									setTimeout(() => {
										const canvas = document.querySelector(
											`#skifree-canvas`
										) as HTMLElement;
										canvas.click();
										canvas.focus();
									}, 500);
								}}>
								{temporaryTranslations.rich(
									"gameIframe.btnText",
									{}
								)}
							</button>
							<p className={style["iframe-placeholder-details"]}>
								{temporaryTranslations.rich(
									"gameIframe.musicBrief",
									{}
								)}
							</p>
							<button
								className={style["iframe-placeholder-button"]}
								onClick={(evt: SyntheticEvent) => {
									setSelectedTemp("music");
								}}>
								{temporaryTranslations.rich(
									"gameIframe.musicBtnTxt",
									{}
								)}
							</button>
						</div>
					</div>
				</div>
			) : (
				// music
				<div className={style["iframe-game-container"]}>
					{playMusic ? (
						<iframe
							width="560"
							height="315"
							src="https://www.youtube.com/embed/kottjfEd7Zw"
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
							style={{
								top: "0px",
								left: "0px",
								width: "100%",
								height: "100%",
								border: "none",
								overflow: "hidden",
							}}
							id={"youtube-canvas"}></iframe>
					) : (
						<></>
					)}
					<div
						className={`${
							style["iframe-placeholder-outer-container"]
						}${playMusic ? ` ${style["hide-placeholder"]}` : ""}`}>
						<div className={style["iframe-placeholder-container"]}>
							<Image
								src={
									"/assets/img/figures/Skifree-placeholder.webp"
								}
								alt="skifree placeholder"
								fill
							/>
						</div>
						<div
							className={
								style["iframe-placeholder-button-overlay"]
							}>
							<p className={style["iframe-placeholder-details"]}>
								{temporaryTranslations.rich(
									"musicIframe.details",
									{
										break: () => {
											return <br />;
										},
									}
								)}
							</p>
							<button
								className={style["iframe-placeholder-button"]}
								onClick={(evt: SyntheticEvent) => {
									setPlayMusic(true);
									setTimeout(() => {
										const canvas = document.querySelector(
											`#youtube-canvas`
										) as HTMLElement;
										canvas.click();
										canvas.focus();
									}, 500);
								}}>
								{temporaryTranslations.rich(
									"musicIframe.btnText",
									{}
								)}
							</button>
							{/* <p className={style["iframe-placeholder-details"]}>
								{temporaryTranslations.rich(
									"gameIframe.musicBrief",
									{}
								)}
							</p>
							<button
								className={style["iframe-placeholder-button"]}
								onClick={(evt: SyntheticEvent) => {
									setSelectedTemp("music");
								}}>
								{temporaryTranslations.rich(
									"gameIframe.musicBtnTxt",
									{}
								)}
							</button> */}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
