import '../Styles/Footer.css'

export default function Footer () {
    return (
        <footer className="mainFooter">
            <div className='left-side-footer'>
                <div className="inner-left-top-footer">
                    <h4>Countries that follows Eats</h4>
                    <p>Philippines | China | Italy</p>
                </div>
                
                <div className="inner-left-bottom-footer">
                    <p>© Eats 2025</p>
                    <p>Terms of Service • Privacy Policy</p>
                </div>
            </div>

            <div className="right-side-footer">
                <div className="inner-right-top">
                    <i class="fa-brands fa-square-facebook"></i>
                    <i class="fa-brands fa-square-facebook"></i>
                    <i class="fa-brands fa-square-facebook"></i>
                </div>
            </div>
        </footer>
    )
}