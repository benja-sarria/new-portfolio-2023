import { createContext, ReactNode, useState } from "react";

export const MessagesContext = createContext<{
	activeMessages?: { [id: string]: any };
	setActiveMessages?: Function;
}>({});

export const MessagesCtxProvider = ({ children }: { children: ReactNode }) => {
	const [activeMessages, setActiveMessages] = useState<{ [id: string]: any }>(
		{}
	);

	return (
		<MessagesContext.Provider value={{ setActiveMessages, activeMessages }}>
			{children}
		</MessagesContext.Provider>
	);
};
