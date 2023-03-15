export default function changePageTitle(page?: string | undefined) {
	document.title = page ? `${page} | Space Tourism` : "Space Tourism";
}
