export const HitMetrika = (id, pathname) => {
	if (pathname) {
		window.ym(id, "hit", pathname);		
	}
}