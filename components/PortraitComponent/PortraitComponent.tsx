import Image from "next/image";
import style from "./PortraitComponent.module.scss";

export const PortraitComponent = ({
	portraitTranslations,
}: {
	portraitTranslations: Function & { rich: Function };
}) => {
	return (
		<div className={style["portrait-container"]}>
			<div className={style["portrait-text-contents"]}>
				<div className={style["portrait-title-container"]}>
					<p className={style["portrait-pre-title"]}>
						{" "}
						{portraitTranslations.rich("pageTitle.preTitleText", {
							break: () => {
								return <br />;
							},
						})}
					</p>
					<h1 className={style["portrait-title"]}>
						{portraitTranslations.rich("pageTitle.text", {
							break: () => {
								return <br />;
							},
						})}
					</h1>
				</div>
				<div className={style["portrait-description-container"]}>
					<div
						className={
							style["portrait-description-shape-outer-container"]
						}>
						<div
							className={
								style["portrait-description-shape-container"]
							}>
							<Image
								src={"/assets/img/other/shape-2.webp"}
								alt="shape"
								fill
							/>
						</div>
					</div>
					<p className={style["portrait-description"]}>
						{portraitTranslations.rich("pageTitle.description", {
							break: () => {
								return <br />;
							},
						})}
					</p>
				</div>
			</div>
		</div>
	);
};
