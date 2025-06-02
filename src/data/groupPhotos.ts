interface Props {
  filename: string
  description: string
}

export interface GroupPhoto extends Props {}
export class GroupPhoto {
  constructor(attrs: Props) {
    Object.assign(this, attrs)
  }
}

export const GROUPPHOTOS: GroupPhoto[] = [
  {
    filename: 'group_2025_may.jpg',
    description: 'May, 2025',
  },
  {
    filename: 'group_2024_aug.jpg',
    description: 'August, 2024',
  },
  {
    filename: 'group_2023_jul.jpg',
    description: 'July, 2023',
  },
  {
    filename: 'group_2023_apr.webp',
    description: 'April, 2023',
  },
  {
    filename: 'group_2023_mar.jpg',
    description: 'March, 2023',
  },
  {
    filename: 'group_2022_jul.jpg',
    description: 'July, 2022',
  },
  {
    filename: 'group_2022_mar.jpg',
    description: 'March, 2022',
  },
  {
    filename: 'group_2021_jul.jpg',
    description: 'July, 2021',
  },
  {
    filename: 'group_2021_mar.jpg',
    description: 'March, 2021',
  },
  {
    filename: 'group_2020_nov.jpg',
    description: 'November, 2020',
  },
  {
    filename: 'group_2020_mar.jpg',
    description: 'March, 2020',
  },
  {
    filename: 'group_2020_feb.jpg',
    description: 'February, 2020',
  },
  {
    filename: 'group_2019_aug.jpg',
    description: 'August, 2019',
  },
  {
    filename: 'group_2019_jun.jpg',
    description: 'June, 2019',
  },
  {
    filename: 'group_2019_feb.jpg',
    description: 'February, 2019',
  },
  {
    filename: 'group_2018_dec.jpg',
    description: 'December, 2018',
  },
  {
    filename: 'group_2018_aug.jpg',
    description: 'August, 2018',
  },
  {
    filename: 'group_2018_jun.jpg',
    description: 'June, 2018',
  },
  {
    filename: 'group_2018_feb.jpg',
    description: 'February, 2018',
  },
  {
    filename: 'group_2017_dec.jpg',
    description: 'December, 2017',
  },
  {
    filename: 'group_2017_jul.jpg',
    description: 'July, 2017',
  },
  {
    filename: 'group_2017_apr.jpg',
    description: 'April, 2017',
  },
  {
    filename: 'group_2017_feb.jpg',
    description: 'February, 2017',
  },
  {
    filename: 'group_2016_dec.jpg',
    description: 'December, 2016',
  },
  {
    filename: 'group_2016_aug.jpg',
    description: 'August, 2016',
  },
] as const satisfies GroupPhoto[]
