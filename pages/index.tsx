import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { PortraitContainer } from "@/containers/PortraitContainer/PortraitContainer";
import { TemporaryComponent } from "@/components/TemporaryComponent/TemporaryComponent";
import { LeadToContainer } from "@/containers/LeadToContainer/LeadToContainer";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ messages }: { messages: any }) {
	return (
		<div>
			<PortraitContainer />
			<LeadToContainer />
			<TemporaryComponent />
		</div>
	);
}

export async function getServerSideProps({ locale }: { locale: string }) {
	console.log("[LOCALE] => ", locale);
	console.log(process.cwd());

	return {
		props: {
			// You can get the messages from anywhere you like. The recommended
			// pattern is to put them in JSON files separated by language and read
			// the desired one based on the `locale` received from Next.js.
			messages: (
				await import(`../models/internationalization/${locale}.json`)
			).default,
		},
	};
}
