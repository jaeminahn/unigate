import { Menu } from "@/types/menu";
import { Translations } from "@/lib/i18n/translations";

export function getMenuData(t: Translations): Menu[] {
  return [
    {
      id: 1,
      title: t.nav.home,
      path: "/",
      newTab: false,
    },
    {
      id: 2,
      title: t.nav.about,
      path: "/",
      newTab: false,
    },
    {
      id: 3,
      title: t.nav.curriculum,
      path: "/",
      newTab: false,
    },
    {
      id: 4,
      title: t.nav.partners,
      path: "/",
      newTab: false,
    },
    {
      id: 5,
      title: t.nav.contact,
      path: "/contact",
      newTab: false,
    },
  ];
}
