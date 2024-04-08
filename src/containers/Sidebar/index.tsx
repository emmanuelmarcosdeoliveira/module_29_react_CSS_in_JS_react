import Title from '../../components/Title'
import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import { Descricao, BotaoTema, SidebarContainer } from './styles'
const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}> Emmanuel M. Oliveira </Title>
      <Paragrafo tipo="secundario" fonteSize={9}>
        emmanuelmarcosdeoliveira
      </Paragrafo>
      <Descricao tipo="principal" fonteSize={12}>
        Developer Web FullStack
      </Descricao>
      <BotaoTema>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </aside>
)
export default Sidebar
