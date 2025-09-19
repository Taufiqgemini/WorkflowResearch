const topLinks = [
  {
    title: "KRUITVAT CLUB",
    imgUrl: 'https://www.kruidvat.nl/medias/sys_master/root/h1b/h2f/26990387626014/1219944_Homepage_148x197/1219944-Homepage-148x197.png',
    items: [
      {
      title: "Activeer je kaart",
      link: '#',
      },
      {
        title: "Alle voordelen",
        link: '#',
      },
      {
        title: "Alle voordelen",
        link: '#',
      },
      {
        title: "Alle voordelen",
        link: '#',
      }
    ],
  },
  {
    title: "KRUITVAT CLUB",
    imgUrl: 'https://www.kruidvat.nl/medias/sys_master/root/h1b/h2f/26990387626014/1219944_Homepage_148x197/1219944-Homepage-148x197.png',
    items: [
      {
      title: "Activeer je kaart",
      link: '#',
      },
      {
        title: "Alle voordelen",
        link: '#',
      },
      {
        title: "Alle voordelen",
        link: '#',
      },
      {
        title: "Alle voordelen",
        link: '#',
      }
    ],
  },
  {
    title: "KRUITVAT CLUB",
    imgUrl: 'https://www.kruidvat.nl/medias/sys_master/root/h1b/h2f/26990387626014/1219944_Homepage_148x197/1219944-Homepage-148x197.png',
    items: [
      {
      title: "Activeer je kaart",
      link: '#',
      },
      {
        title: "Alle voordelen",
        link: '#',
      },
      {
        title: "Alle voordelen",
        link: '#',
      },
      {
        title: "Alle voordelen",
        link: '#',
      }
    ],
  },
]

const navLinks = [
  { text: "PRIVACY", href: "#" },
  { text: "DISCLAIMER", href: "#" },
  { text: "ALGEMENE VERKOOPSVOORWAARDEN", href: "#" },
  { text: "VEILIG BETALEN", href: "#" },
  { text: "ZELF COOKIES BEHEREN", href: "#" },
];

export function Footer() {
  return (
    <footer>
      <div className="bg-gray-100 border-t-2">
        <div className="flex p-4">
          {topLinks.map(block => (
            <div className={`border-l-2 px-4 min-w-60 bg-[url('https://www.kruidvat.nl/medias/sys_master/root/h1b/h2f/26990387626014/1219944_Homepage_148x197/1219944-Homepage-148x197.png'))] bg-no-repeat`}>
              <h3 className="font-bold">{block.title}</h3>
              <ul>
                {block.items.map(item => (
                  <li key={item.link}>
                    <a className="text-sm !text-black" href={item.link}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-red-500 flex align-center px-12 py-4 gap-12">
        <img
          className="h-12"
          src="https://www.kruidvat.nl/medias/sys_master/images/hd8/h44/8796143157278/logo-Kruidvat-2019/logo-Kruidvat-2019.svg"
          alt=""
        />
        <div className="flex items-center">
          <p className="text-2xl text-white font-bold">STEEDS VERRASSEND, ALTIJD VOORDELIG!</p>
        </div>
      </div>
      <div className="flex align-center items-center justify-between">
        <ul className="flex py-4">
          {navLinks.map(item => (
            <li key={item.href} className="after:content-['|'] last:after:content-['']">
              <a className="text-xs !text-black px-8" href={item.href}>
                {item.text}
              </a>
            </li>
          ))}
        </ul>
        <img
          className="h-8 pr-8"
          src="https://www.kruidvat.nl/medias/sys_master/images/h01/ha3/8796153872414/CKHH-Strapline/CKHH-Strapline.png"
        />
      </div>
    </footer>
    );
};