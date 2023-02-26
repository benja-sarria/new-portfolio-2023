import { MessagesContext } from "@/context/messagesContextProvider";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext } from "react";
import { LanguageSelectorComponent } from "../LanguageSelectorComponent/LanguageSelectorComponent";
import style from "./NavbarComponent.module.scss";

export const NavbarComponent = ({
	navbarTranslations,
}: {
	navbarTranslations: Function;
}) => {
	const { activeMessages } = useContext(MessagesContext) as {
		activeMessages: any;
	};
	const router = useRouter();
	console.log("[MESSAGES] => ", activeMessages);

	return (
		<div className={style["navbar-container"]}>
			<div className={style["navbar-logo-outer-container"]}>
				<div>
					<div className={style["navbar-logo-inner-container"]}>
						<Image
							src={"/assets/img/logo/bs2.webp"}
							alt="logo"
							fill
						/>
					</div>
					<div className={style["navbar-lang-selector-container"]}>
						<LanguageSelectorComponent
							type="main"
							device="desktop"
							locale={`${router.locale}`}
							setPageLoading={() => {}}
						/>
					</div>
				</div>
				<div className={style["navbar-logo-inner-container-4"]}>
					<Image src={"/assets/img/logo/bs7.webp"} alt="logo" fill />
				</div>

				<div className={style["navbar-logo-inner-container-4"]}>
					<Image src={"/assets/img/logo/bs6.webp"} alt="logo" fill />
				</div>
			</div>
			<div className={style["navbar-menu-outer-container"]}>
				<button className={style["navbar-menu-btn"]}>
					<div className={style["navbar-btn-line-one"]}></div>
					<div className={style["navbar-btn-line-two"]}></div>
					<div className={style["navbar-btn-line-three"]}></div>
				</button>
				<div>
					<ul>
						{activeMessages?.navigationComponent?.menu ? (
							Object.keys(
								activeMessages?.navigationComponent?.menu
							).map((item) => {
								return (
									<li key={`${item}-${router.locale}`}>
										{navbarTranslations(
											`menu.${item}.text`
										)}
									</li>
								);
							})
						) : (
							<></>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};
