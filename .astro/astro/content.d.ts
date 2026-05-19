declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"jembatan-ilmu.md": {
	id: "jembatan-ilmu.md";
  slug: "jembatan-ilmu";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"mengenal-pkbm-peluang-dakwah.md": {
	id: "mengenal-pkbm-peluang-dakwah.md";
  slug: "mengenal-pkbm-peluang-dakwah";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pertemuan-perdana.md": {
	id: "pertemuan-perdana.md";
  slug: "pertemuan-perdana";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"tantangan-pkbm-dan-solusinya.md": {
	id: "tantangan-pkbm-dan-solusinya.md";
  slug: "tantangan-pkbm-dan-solusinya";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
};
"pkbm-profil": {
"anshorussunnah.md": {
	id: "anshorussunnah.md";
  slug: "anshorussunnah";
  body: string;
  collection: "pkbm-profil";
  data: any
} & { render(): Render[".md"] };
"kuttab-ababil-qanuni.md": {
	id: "kuttab-ababil-qanuni.md";
  slug: "kuttab-ababil-qanuni";
  body: string;
  collection: "pkbm-profil";
  data: any
} & { render(): Render[".md"] };
"pkbm-adzka.md": {
	id: "pkbm-adzka.md";
  slug: "pkbm-adzka";
  body: string;
  collection: "pkbm-profil";
  data: any
} & { render(): Render[".md"] };
"pkbm-al-amanah.md": {
	id: "pkbm-al-amanah.md";
  slug: "pkbm-al-amanah";
  body: string;
  collection: "pkbm-profil";
  data: any
} & { render(): Render[".md"] };
"pkbm-al-fajar-al-islamiy.md": {
	id: "pkbm-al-fajar-al-islamiy.md";
  slug: "pkbm-al-fajar-al-islamiy";
  body: string;
  collection: "pkbm-profil";
  data: any
} & { render(): Render[".md"] };
"pkbm-al-istiqomah.md": {
	id: "pkbm-al-istiqomah.md";
  slug: "pkbm-al-istiqomah";
  body: string;
  collection: "pkbm-profil";
  data: any
} & { render(): Render[".md"] };
"pkbm-al-kautsar.md": {
	id: "pkbm-al-kautsar.md";
  slug: "pkbm-al-kautsar";
  body: string;
  collection: "pkbm-profil";
  data: any
} & { render(): Render[".md"] };
"pkbm-al-mansuora.md": {
	id: "pkbm-al-mansuora.md";
  slug: "pkbm-al-mansuora";
  body: string;
  collection: "pkbm-profil";
  data: any
} & { render(): Render[".md"] };
"pkbm-asy-syamil-lima-puluh-kota.md": {
	id: "pkbm-asy-syamil-lima-puluh-kota.md";
  slug: "pkbm-asy-syamil-lima-puluh-kota";
  body: string;
  collection: "pkbm-profil";
  data: any
} & { render(): Render[".md"] };
"pkbm-attamam-2.md": {
	id: "pkbm-attamam-2.md";
  slug: "pkbm-attamam-2";
  body: string;
  collection: "pkbm-profil";
  data: any
} & { render(): Render[".md"] };
"pkbm-barokah-ilmu-plus.md": {
	id: "pkbm-barokah-ilmu-plus.md";
  slug: "pkbm-barokah-ilmu-plus";
  body: string;
  collection: "pkbm-profil";
  data: any
} & { render(): Render[".md"] };
"pkbm-daarus-sunnah-rangkasbitung.md": {
	id: "pkbm-daarus-sunnah-rangkasbitung.md";
  slug: "pkbm-daarus-sunnah-rangkasbitung";
  body: string;
  collection: "pkbm-profil";
  data: any
} & { render(): Render[".md"] };
"pkbm-el-hijrah.md": {
	id: "pkbm-el-hijrah.md";
  slug: "pkbm-el-hijrah";
  body: string;
  collection: "pkbm-profil";
  data: any
} & { render(): Render[".md"] };
"pkbm-fitrah-rabbani.md": {
	id: "pkbm-fitrah-rabbani.md";
  slug: "pkbm-fitrah-rabbani";
  body: string;
  collection: "pkbm-profil";
  data: any
} & { render(): Render[".md"] };
"pkbm-himmatul-ummah.md": {
	id: "pkbm-himmatul-ummah.md";
  slug: "pkbm-himmatul-ummah";
  body: string;
  collection: "pkbm-profil";
  data: any
} & { render(): Render[".md"] };
"pkbm-ibad-ar-rahman-surabaya.md": {
	id: "pkbm-ibad-ar-rahman-surabaya.md";
  slug: "pkbm-ibad-ar-rahman-surabaya";
  body: string;
  collection: "pkbm-profil";
  data: any
} & { render(): Render[".md"] };
"pkbm-ibadurrahman-balangan.md": {
	id: "pkbm-ibadurrahman-balangan.md";
  slug: "pkbm-ibadurrahman-balangan";
  body: string;
  collection: "pkbm-profil";
  data: any
} & { render(): Render[".md"] };
"pkbm-ibnu-abbas.md": {
	id: "pkbm-ibnu-abbas.md";
  slug: "pkbm-ibnu-abbas";
  body: string;
  collection: "pkbm-profil";
  data: any
} & { render(): Render[".md"] };
"pkbm-imam-muslim.md": {
	id: "pkbm-imam-muslim.md";
  slug: "pkbm-imam-muslim";
  body: string;
  collection: "pkbm-profil";
  data: any
} & { render(): Render[".md"] };
"pkbm-islamic-centre-bin-baz-wangon.md": {
	id: "pkbm-islamic-centre-bin-baz-wangon.md";
  slug: "pkbm-islamic-centre-bin-baz-wangon";
  body: string;
  collection: "pkbm-profil";
  data: any
} & { render(): Render[".md"] };
"pkbm-plus-babussalam.md": {
	id: "pkbm-plus-babussalam.md";
  slug: "pkbm-plus-babussalam";
  body: string;
  collection: "pkbm-profil";
  data: any
} & { render(): Render[".md"] };
"pkbm-riyadhul-jannah-bojongsari.md": {
	id: "pkbm-riyadhul-jannah-bojongsari.md";
  slug: "pkbm-riyadhul-jannah-bojongsari";
  body: string;
  collection: "pkbm-profil";
  data: any
} & { render(): Render[".md"] };
"pkbm-sabilul-hidayah.md": {
	id: "pkbm-sabilul-hidayah.md";
  slug: "pkbm-sabilul-hidayah";
  body: string;
  collection: "pkbm-profil";
  data: any
} & { render(): Render[".md"] };
"pkbm-sekolah-al-jazariy.md": {
	id: "pkbm-sekolah-al-jazariy.md";
  slug: "pkbm-sekolah-al-jazariy";
  body: string;
  collection: "pkbm-profil";
  data: any
} & { render(): Render[".md"] };
"pkbm-sekolah-developer-indonesia-kodein.md": {
	id: "pkbm-sekolah-developer-indonesia-kodein.md";
  slug: "pkbm-sekolah-developer-indonesia-kodein";
  body: string;
  collection: "pkbm-profil";
  data: any
} & { render(): Render[".md"] };
"pkbm-sekolah-islam-abu-bakar.md": {
	id: "pkbm-sekolah-islam-abu-bakar.md";
  slug: "pkbm-sekolah-islam-abu-bakar";
  body: string;
  collection: "pkbm-profil";
  data: any
} & { render(): Render[".md"] };
"pkbm-sekolah-tahfidz-ibnu-mas-ud.md": {
	id: "pkbm-sekolah-tahfidz-ibnu-mas-ud.md";
  slug: "pkbm-sekolah-tahfidz-ibnu-mas-ud";
  body: string;
  collection: "pkbm-profil";
  data: any
} & { render(): Render[".md"] };
"pkbm-stq-al-muzaniy.md": {
	id: "pkbm-stq-al-muzaniy.md";
  slug: "pkbm-stq-al-muzaniy";
  body: string;
  collection: "pkbm-profil";
  data: any
} & { render(): Render[".md"] };
"pkbm-tahfizh-at-tamam.md": {
	id: "pkbm-tahfizh-at-tamam.md";
  slug: "pkbm-tahfizh-at-tamam";
  body: string;
  collection: "pkbm-profil";
  data: any
} & { render(): Render[".md"] };
"pkbm-zirr-bin-hubaisy.md": {
	id: "pkbm-zirr-bin-hubaisy.md";
  slug: "pkbm-zirr-bin-hubaisy";
  body: string;
  collection: "pkbm-profil";
  data: any
} & { render(): Render[".md"] };
"pondok-tahfizh-putri-aladzievie.md": {
	id: "pondok-tahfizh-putri-aladzievie.md";
  slug: "pondok-tahfizh-putri-aladzievie";
  body: string;
  collection: "pkbm-profil";
  data: any
} & { render(): Render[".md"] };
"rumah-qur-an-riyadhus-shalihin.md": {
	id: "rumah-qur-an-riyadhus-shalihin.md";
  slug: "rumah-qur-an-riyadhus-shalihin";
  body: string;
  collection: "pkbm-profil";
  data: any
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = never;
}
