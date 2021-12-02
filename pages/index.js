import Hello from '../components/Hello'
import Footer from '../components/Footer'
import Counter from '../components/Counter'

const users = [
  "Nelson",
  "Yun",
  "Luis",
  "Rita"
]

export default function Home() {
  return (
    <div>
      {users.sort().map((name) => <Hello name={name}/>)}
      <Counter />
      <Footer />
    </div>
  )
}
