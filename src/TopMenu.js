import {
    Container,
    Dropdown,
    Image,
    Menu,
 } from 'semantic-ui-react';
 import logo from './images/android-chrome-512x512.png'

function TopMenu(props) {
    return (
        <Menu fixed='top' inverted style={{height: '7.5vh'}}>
        <Container>
        <Menu.Item as='a' headerl onClick={props.onClickFront}>
            <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
            Project Name
        </Menu.Item>
        <Menu.Item as='a' onClick={props.onClickHome}>Home</Menu.Item>

        <Dropdown item simple text='Dropdown'>
            <Dropdown.Menu>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Header Item</Dropdown.Header>
            <Dropdown.Item>
                <i className='dropdown icon' />
                <span className='text'>Submenu</span>
                <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </Container>
        </Menu>
    )
}
export default TopMenu