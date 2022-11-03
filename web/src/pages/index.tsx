import Image from "next/image"
import logoImg from '../assets/logo.svg'
import avatarImg from '../assets/users-avatar-example.png'
import iconCheckImg from '../assets/icon-check.svg'
import previewAppImg from '../assets/app-nlw-copa-preview.png'
import {api} from "../../lib/axios"

interface homeProps{
	poolCount: number,
	userCount: number,
	guessCount: number,
}

export default function Home(props: homeProps) {
  return (
		<div className="max-w-[1124px] h-screen mx-auto grid grid-cols-2 gap-28 items-center">
			<main>
				<Image src={logoImg} alt="logo nlw"/>
				<h1 className='mt-14 text-white text-5xl font-bold leading-tight'>Crie seu próprio bolão da copa e compartilhe entre amigos!</h1>

				<div className="mt-10 flex items-center gap-2">
					<Image src={avatarImg} alt="Preview de avatares de usuarios do bolão"/>
					<strong className="text-gray-100 text-xl">
						<span className="text-ignite-500">+{props.userCount}</span> Pessoas ja estão utilizando!
					</strong>
				</div>

				<form className="mt-10 flex gap-2">
					<input type="text" required placeholder='Qual o nome do seu bolão?' className="flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm text-white" />
					<button type="submit" className="bg-yellow-500 px-6 py-4 rounded font-bold text-gray-900 text-sm uppercase hover:bg-yellow-600">
						Criar meu bolão
					</button>
				</form>

				<p className="text-gray-300 mt-4 text-sm leading-relaxed">Após criar seu bolão, voce receberá um código unico que poderá usar para convidar outras pessoas🚀</p>

				<div className="mt-10 pt-10 border-t border-gray-600 flex items-center justify-between text-gray-100 ">
					<div className="flex items-center gap-6">
						<Image src={iconCheckImg} alt='Icon de check'/>
						<div className="flex flex-col">
							<span className="font-bold text-2xl">
								+{props.poolCount}
							</span>
							<span>
								Bolões criados
							</span>
						</div>
					</div>


					<div className="w-px h-14 bg-gray-600"/>

					<div className="flex items-center gap-6">
						<Image src={iconCheckImg} alt='Icon de check'/>
						<div className="flex flex-col">
							<span className="font-bold text-2xl">
								+{props.guessCount}
							</span>
							<span>
								Palpites enviados
							</span>
						</div>
					</div>

				</div>
			</main>

			<Image src={previewAppImg} alt='preview de dois telefones com o aplicativo ligado' quality={100}/>

		</div>


	)
}


export const getServerSideProps = async ()=>{

	const [poolCountResponse, guessCountResponse, userCountResponse] = await Promise.all([
		api.get('pools/count'),
		api.get('guesses/count'),
		api.get('users/count')
	])
	
	return {
		props: {
			poolCount: poolCountResponse.data,
			guessCount: guessCountResponse.data,
			userCount: userCountResponse.data,
		}
	}

}