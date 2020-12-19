import {
	Code,
	Row,
	Link,
	Page,
	Spacer,
	Table,
	Text,
	useMediaQuery,
	Tooltip,
} from '@geist-ui/react'
import { QuestionCircle } from '@geist-ui/react-icons'
const fetch = require('node-fetch')

interface Route {
	name: string
	title: string
	description: string
	url: string
	public: boolean
}

interface HomeRouteProps {
	routes: Array<Route>
}

const HomeRoutes: React.FC<HomeRouteProps> = ({ routes }) => {
	const upMD = useMediaQuery('md', { match: 'up' })

	return (
		<>
			<Page size="small">
			</Page>
		</>
	)
}

export default HomeRoutes

export const getStaticProps = async () => {
	const response = await fetch(process.env.apiURL).then((x) => x.json())

	return {
		props: {
			routes: response
				.map((d) => ({
					name: d.name,
					url: d.url,
					public: d.public,
					description: d.description || 'n/a',
					title: d.title || 'n/a',
				}))
				.filter((x) => x.public),
		},
	}
}
