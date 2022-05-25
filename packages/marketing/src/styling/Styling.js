import { createTheme } from '@material-ui/core/styles'
import styled from "styled-components";

// const { palette } = createTheme();
// export default createTheme({
//   palette: {
//         companyDarkBlue: palette.augmentColor({
//         color: {
//             main: '#0c0a89',
//             dark: '#15113b'
//         }
//         }),
//         companyLightBlue: palette.augmentColor({
//         color: {
//             main: '#45aec8',
//             light: '#45aec826'
//         }
//         }),
//         companyYellow: palette.augmentColor({
//         color: {
//             main: '#ffd343'
//         }
//         }),
//     },
// });


class FooterContainer extends React.Component {
    render() {
      // Attach the passed-in className to the DOM node
      return <div className={this.props.className} />
    }
  }


export default StyledContainer() {
    const container = styled.section`
        width: 100%;
        max-width: 1400px;
        margin-top: 20px;
        margin-right: auto;
        margin-left: auto;
        font-family: 'Playfair Display', sans-serif;
    `;

    return container
}