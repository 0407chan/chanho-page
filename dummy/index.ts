import { title } from 'process'
import { Portforlio } from '../types'
import { format } from 'date-fns'

const GOD_CHANHO = `/image/godchanho.gif`
const LOVE_MONDAY_1 = `/image/love-monday.png`
const LOVE_MONDAY_2 = `/image/love-monday2.png`

export const DUMMY_PORTFORLIO: Portforlio[] = [
  {
    id: 1,
    title: '월요일 좋아',
    image: LOVE_MONDAY_1,
    updatedAt: `${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}`,
    description: '뚱이는 월요일을 좋아합니다.'
  },
  {
    id: 2,
    title: '화요일 좋아',
    image: LOVE_MONDAY_2,
    updatedAt: `${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}`,
    description: '스펀지밥은 월요일을 매우매우 좋아합니다.'
  },
  {
    id: 3,
    title: '갓 찬호',
    image: GOD_CHANHO,
    updatedAt: `${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}`,
    description: '슬랙이벤트로 받은 갓찬호 이모지입니다'
  }
]
