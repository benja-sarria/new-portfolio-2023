import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import style from "./LeadToComponent.module.scss";

export const LeadToComponent = ({
	leadToTranslations,
	setChildRef,
	childRef,
	enableScroll,
}: {
	leadToTranslations: Function & { rich: Function };
	setChildRef: Function;
	childRef: any;
	enableScroll: Function;
}) => {
	const sectionRef = useRef(null);
	const router = useRouter();

	useEffect(() => {
		if (sectionRef.current !== childRef?.current) {
			setChildRef(sectionRef);
		}
	}, [sectionRef.current]);

	return (
		<div className={style["lead-to-container"]} ref={sectionRef}>
			<div className={style["lead-ribbon-container"]}>
				<div className={style["lead-btn-container"]}>
					<button
						className={style["lead-btn"]}
						onClick={() => {
							enableScroll();
							router.push("#temporarySection", undefined, {
								scroll: true,
							});
						}}>
						<div className={style["btn-img-container"]}>
							{/* <Image
								src={"/assets/img/other/shape-2.webp"}
								alt="launch button"
								fill
							/> */}
						</div>
						<h3 className={style["lead-btn-text"]}>
							{leadToTranslations("button.btnText")}
						</h3>
					</button>
				</div>{" "}
			</div>
		</div>
	);
};
