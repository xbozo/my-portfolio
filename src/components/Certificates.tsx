import { certificatesList } from '../data/certificates'

export const Certificates = () => {
	return (
		<div className="flex flex-col max-h-[630px] overflow-x-hidden overflow-y-scroll">
			{certificatesList.map((item, index) => (
				<div
					className="flex flex-col items-center p-4"
					key={index}
				>
					<img
						src={item.imagePath}
						alt=""
						className="max-w-full rounded"
					/>
				</div>
			))}

			<div className="max-w-lg mx-auto mt-4">
				<footer className="text-sm text-center text-gray-500 ">
					Demais certificados estão em processo de emissão ou ainda não foram concluídas 100% das
					aulas referente ao curso para solicitar.
				</footer>
			</div>
		</div>
	)
}
