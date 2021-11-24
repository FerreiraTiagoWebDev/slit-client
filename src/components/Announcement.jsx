import styled from "styled-components"

const Container = styled.div `
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 14px;
`

const Announcement = () => {
    return (
        <Container>
            Super Deals! Free Shipping on Orders Over 50€!
        </Container>
    )
}

export default Announcement
