import WordCard from '@/shared/components/wordCard'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/shared/ui/dialog'
import { IWord } from '@/types/words.types'

interface props {
	data: IWord
}

const OpenWordDialog = ({ data }: props) => {
	return (
		<Dialog>
			<DialogTrigger>
				<WordCard data={data} />
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Are you absolutely sure?</DialogTitle>
					<DialogDescription>
						This action cannot be undone. This will permanently delete your
						account and remove your data from our servers.
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}

export default OpenWordDialog
