import React, { Fragment } from 'react'
import Footer from '../Footer/Footer'
import './FAQ.css'
import Navbarmenu from '../Navbarmenu/Navbarmenu'

 function FAQ() {
    return (
        <Fragment>

        <Navbarmenu/>
        <div className="glob-question">
            <h1 className="question-titre"> Questions fréquemment posées</h1>
            <div className="questions-englob">
            <p> Q: Tous vos téléphones sont-il neufs et originaux</p>
            <p>A: Tous les téléphones figurant sur le site Web SmartTech sont neufs et originaux.</p>
            <p>Q: Comment puis-je acheter un téléphone chez SmartTech?</p>
            <p>Q:Est-il possible pour moi d'annuler ma commande? Qu'elle est la procedure d'annulation?</p>
            <p>Q: Puis-je acheter un téléphone à partir de n'importe quel pays?</p>
            <p>Q:Y at-il des frais supplémentaires autres que ceux que je vois lors de la confirmation de la commande?</p>
            <p>Q: Comment marchent les garanties?</p>
            <p>Q:Puis-je acheter un téléphone chez SmartTech avec un contrat d'opérateur?</p>
            <p> Q:Puis-je acheter le téléphone en plusieurs versements?</p>
            <p> Q:Pourquoi avez-vous le même modèle avec des prix différents sur le site en ligne SmartTech?</p>
            <p> Q:Pourquoi avez-vous des prix différents pour les différentes couleurs du même téléphone sur votre site en ligne? </p>
            <p> Q:Peut-on livrer dans les petites villes et villages? </p>
            <p>Q:Puis-je venir personnellement prendre ma commande? </p>
            <p> Q:Puis-je retourner mon téléphone, par quelle procédure et à quelle période de temps dois-je m'attendre pour être remboursé? </p>
            <p> Q:Le colis m'a été livré endommagé, comment puis-je me faire rembourser ma perte?</p>
            </div>
       <Footer/>
        </div>
        </Fragment>
    )
}
export default FAQ