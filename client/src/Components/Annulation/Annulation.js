import React from 'react'
import Footer from '../Footer/Footer'
import './Annulation.css'

function Annulation() {
    return (
        <div className="retour-bloc">
            <h1 className="annulate"> Annulation er retour</h1>
            <div className="encast-bloc">
            <h3 className="annuler-tit"> COMMENT ANNULER VOTRE COMMANDE</h3>
            <p className="annuler-para" > Si vous souhaitez annuler votre commande veuillez nous envoyer un e-mail contenant votre numéro de commande et la raison de l'annulation sur <br/>
            SmartTech.tn@gmail.com </p>
            <p className="annuler-para"> Après avoir traité votre demande, nous vous enverrons un e-mail confirmant l'annulation de la commande.</p>
            <p className="annuler-para"> Vous ne pouvez annuler la commande si l'article a déjà été envoyé. S’il est déjà sur son chemin, vous pouvez en savoir plus dans la section suivante -  <br/>
            Comment retourner l'appareil.</p>
            <h3 className="annuler-tit"> COMMENT RETOURNER L’APPAREIL</h3>
            <p className="annuler-para"> Vous avez le droit de vous rétracter dans un délai de 14 jours suivant la réception de votre commande</p>
            <p className="annuler-para"> En cas de retour, le client est tenu responsable pour le renvoi de l’appareil dans son état d’origine, ainsi que pour les frais de retour ou autres frais qui <br/>
             peuvent survenir.</p>
             <p className="annuler-para"> SmartTech se réserve le droit de procéder au remboursement de client au bout de 30 jours à compter de la date de réception du produit dans notre dépôt.</p>
             <p className="annuler-para"> Si vous voulez retourner l'appareil veuillez tout d'abord nous informer via email sur  SmartTech.tn@gmail.com</p>
             <p className="annuler-para"> Au bout d'un jour ouvré vous recevrez des instructions et l'adresse pour le retour.</p>
             <h4 className="annuler-tit"> En cas de retour, les frais de retour sont à la charge de client.</h4>
             <p className="annuler-para"> Si le produit acheté dans notre magasin est retourné en parfait état d’origine (pas endommagé), SmartTech procédéra au remboursement via PayPal, carte <br/>
              de crédit ou virement bancaire du prix total du produit payé. Tout produit utilisé, endommagé ou perturbé sera exceptionnellement examiné.</p>
              </div>
            <Footer/>
        </div>
    )
}

export default Annulation