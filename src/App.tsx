import { Footer } from './layout/footer/Footer'
import { Header } from './layout/header/Header'
import { CreateNft } from './layout/sections/createNft/CreateNft'
import { Main } from './layout/sections/main/Main'
import { Subscribe } from './layout/sections/subscribe/Subscribe'
import { Works } from './layout/sections/works/Works'

function App() {
	return (
		<div className='App'>
			<Header />
			<Main />
			<Works />
			<CreateNft />
			<Subscribe />
			<Footer />
		</div>
	)
}

export default App
