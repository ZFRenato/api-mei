import sgMail, { MailService } from "@sendgrid/mail";

/* sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = async (emailTo) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
        to: emailTo,
        from: 'renato.carvalho@mei-brasil.net.br',

    }

}
*/

class SendMail {
    private sendGrid: MailService;
    private EmailFrom: string = 'renato.carvalho@mei-brasil.net.br';
    private EmailTo: string;

    constructor (EmailTo: string) {
        this.EmailTo = EmailTo;
        this.sendGrid = sgMail;
        this.setKey();
    }


    async emailConfirmation (id: string) {
        const msg = {
            to: this.EmailTo,
            from: this.EmailFrom,
            subject: 'Confirmação de Email / Mei-Brasil',
            text: `Click no Link para confirmar https://github.com/winstonjs/winston`,
            html: "Click no Link para Confirmar <a href='https://github.com/winstonjs/winston' target='_blanck'>Aqui</a>"
        }
        try {
            const result = await this.sendGrid.send(msg);
        } catch (error) {
            console.log(error)
        }
        
    }

    setKey (): void {
        this.sendGrid.setApiKey(process.env.SENDGRID_API_KEY);
    }
}

export {
    SendMail
}