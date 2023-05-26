import './Footer.css'

export const Footer = () => {
    return (
        <footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://gitlab.com/JeisielRamos" target="_blank">
                        <img src="/imagens/gitlab-logo.png" alt="" height="30" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/JeisielRamos" target="_blank">
                    <img src="/imagens/github-logo.png" alt="" height="30"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/jeisiel-ramos-a76953108/" target="_blank">
                        <img src="/imagens/linkedin-logo.png" alt="" height="30" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/logo.png" alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por JeisielRamos@2023.
            </p>
        </section>
    </footer>
    )
}