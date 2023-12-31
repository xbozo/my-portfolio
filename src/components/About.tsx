import { motion } from 'framer-motion'

export const About = () => {
	return (
		<motion.div
			initial={{ opacity: 0, x: -15 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.4 }}
		>
			<div className='flex flex-col justify-between h-full gap-8 p-2 text-base md:text-lg'>
				<div className='flex flex-col gap-4'>
					<h1 className='text-2xl font-bold'>👋 Olá, meu nome é Guilherme Viana!</h1>

					<p>
						Sou um desenvolvedor <strong>front-end</strong> apaixonado por tecnologia e atuo no
						<strong> desenvolvimento web</strong>.
					</p>
				</div>

				<div className='flex flex-col gap-6'>
					<h2 className='mt-5 text-2xl font-bold'>Sobre mim</h2>
					<p>
						Possuo experiência em <strong>React</strong> & <strong>Next.js</strong>, além de
						trabalhar com <strong>TypeScript</strong>.
					</p>

					<p>
						Atualmente possuo cerca de 2 anos de estudos e cerca de 1 ano de experiência em projetos
						reais focado na stack citada acima.
					</p>

					<p>
						Gosto de apresentações e soluções <strong>simples</strong> que cumpram seu propósito, e
						é o que tento trazer ao meu dia a dia.
					</p>

					<p>
						Também gosto de me desafiar e minha maior metodologia é tentar sempre dar passo a passo,
						uma coisa de cada vez.
					</p>

					<p>
						Estudei em plataformas como <strong>B7Web</strong>, <strong>Rocketseat</strong>,{' '}
						<strong>Codante.io</strong>, dentre outras. Além de consumir muita documentação das
						próprias tecnologias.
					</p>

					<p>
						No futuro, pretendo experimentar outras áreas da programação no futuro, como back-end e
						outros escopos além do desenvolvimento web.
					</p>
				</div>
			</div>
		</motion.div>
	)
}
