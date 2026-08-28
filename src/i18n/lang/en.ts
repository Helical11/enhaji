import type { UIStrings } from "../types";

export default {
  nav: {
    home: "ホーム",
    posts: "記事",
    tags: "タグ",
    about: "About",
    archives: "アーカイブ",
    search: "検索",
  },
  post: {
    publishedAt: "公開日",
    updatedAt: "更新日",
    sharePostIntro: "この記事をシェア:",
    sharePostOn: "{{platform}}で共有する",
    sharePostViaEmail: "メールで共有する",
    tagLabel: "タグ",
    backToTop: "トップに戻る",
    goBack: "戻る",
    editPage: "このページを編集",
    previousPost: "前の記事",
    nextPost: "次の記事",
  },
  pagination: {
    prev: "前へ",
    next: "次へ",
    page: "ページ",
  },
  home: {
    socialLinks: "リンク",
    featured: "おすすめ記事",
    recentPosts: "最新の記事",
    allPosts: "すべての記事",
  },
  footer: {
    copyright: "Copyright",
    allRightsReserved: "All rights reserved.",
  },
  pages: {
    tagTitle: "タグ",
    tagDesc: "このタグが付いた記事:",

    tagsTitle: "タグ",
    tagsDesc: "記事で使われているすべてのタグです。",

    postsTitle: "記事",
    postsDesc: "これまでに投稿したすべての記事です。",

    archivesTitle: "アーカイブ",
    archivesDesc: "これまでの記事をアーカイブしています。",

    searchTitle: "検索",
    searchDesc: "記事を検索できます ...",
  },
  a11y: {
    skipToContent: "本文へスキップ",
    openMenu: "メニューを開く",
    closeMenu: "メニューを閉じる",
    toggleTheme: "テーマを切り替える",
    searchPlaceholder: "記事を検索...",
    noResults: "結果が見つかりませんでした",
    goToPreviousPage: "前のページへ",
    goToNextPage: "次のページへ",
  },
  notFound: {
    title: "404 ページが見つかりません",
    message: "ページが見つかりません",
    goHome: "ホームに戻る",
  },
} satisfies UIStrings;
