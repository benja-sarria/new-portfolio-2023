import { createContext, ReactNode, useState } from "react";

export interface PageLoadingContextInterface {
	pageLoading: boolean;
	setPageLoading?: Function;
}

export const PageLoadingContext = createContext<PageLoadingContextInterface>({
	pageLoading: true,
});

export const PageLoadingCtxProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	const [pageLoading, setPageLoading] = useState<boolean>(true);

	return (
		<PageLoadingContext.Provider value={{ pageLoading, setPageLoading }}>
			{children}
		</PageLoadingContext.Provider>
	);
};
