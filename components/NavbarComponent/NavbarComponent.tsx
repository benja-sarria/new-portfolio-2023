import ClickAwayListener from "@mui/base/ClickAwayListener";

import Image from "next/image";
import { useRouter } from "next/router";

import { MessagesContext } from "@/context/MessagesContextProvider";
import { SyntheticEvent, useContext } from "react";
import { LanguageSelectorComponent } from "../LanguageSelectorComponent/LanguageSelectorComponent";
import style from "./NavbarComponent.module.scss";

export const NavbarComponent = ({
	navbarTranslations,
	openCollapse,
	collapseHandler,
}: {
	navbarTranslations: Function;
	openCollapse: boolean;
	collapseHandler: Function;
}) => {
	const { activeMessages } = useContext(MessagesContext) as {
		activeMessages: any;
	};
	const router = useRouter();
	console.log("[MESSAGES] => ", activeMessages);

	return (
		<div className={style["navbar-container"]}>
			<div className={style["navbar-logo-outer-container"]}>
				<div className={style["navbar-lang-logo-container"]}>
					{/* <div className={style["navbar-logo-inner-container"]}>
						<Image
							src={"/assets/img/logo/bs2.webp"}
							alt="logo"
							fill
						/>
					</div> */}
					<div className={style["navbar-logo-inner-container-5"]}>
						<Image
							src={"/assets/img/other/bs9.webp"}
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
			</div>
			<ClickAwayListener
				onClickAway={() => {
					openCollapse && collapseHandler(true);
				}}>
				<div className={style["navbar-menu-outer-container"]}>
					<button
						className={`${style["navbar-menu-btn"]}${
							openCollapse ? ` ${style["opened-style"]}` : ""
						}`}
						onClick={(evt: SyntheticEvent) => {
							collapseHandler(openCollapse);
						}}>
						<div className={style["navbar-btn-line-one"]}></div>
						<div className={style["navbar-btn-line-two"]}></div>
						<div className={style["navbar-btn-line-three"]}></div>
					</button>

					<div
						className={`${style["navbar-menu-collapse-container"]}${
							openCollapse ? ` ${style["open-collapse"]}` : ""
						}`}>
						<ul className={style["navbar-menu-collapse-list"]}>
							{activeMessages?.navigationComponent?.menu ? (
								Object.keys(
									activeMessages?.navigationComponent?.menu
								).map((item) => {
									return (
										<li
											key={`${item}-${router.locale}`}
											className={
												style[
													"navbar-menu-collapse-item"
												]
											}>
											<p
												className={
													style[
														"navbar-menu-collapse-item-text"
													]
												}>
												{navbarTranslations(
													`menu.${item}.text`
												)}
											</p>
											<div
												className={
													style[
														"navbar-menu-collapse-item-underline"
													]
												}></div>
										</li>
									);
								})
							) : (
								<></>
							)}
						</ul>
					</div>
				</div>
			</ClickAwayListener>
		</div>
	);
};
