import Layout from "@/components/Layout/Layout";
import { MessagesCtxProvider } from "@/context/MessagesContextProvider";
import { PageLoadingCtxProvider } from "@/context/PageLoadingProvider";
import "@/styles/globals.css";
import { NextIntlProvider } from "next-intl";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<NextIntlProvider messages={pageProps.messages}>
			<MessagesCtxProvider>
				<PageLoadingCtxProvider>
					<Layout messages={pageProps.messages}>
						<Component {...pageProps} />
					</Layout>
				</PageLoadingCtxProvider>
			</MessagesCtxProvider>
		</NextIntlProvider>
	);
}
