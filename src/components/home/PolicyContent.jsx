import style from '../../styles/components/Home/PolicyContent.module.css'

export default function PolicyContent() {
    return (
        <>
            <section className={style.policy} id="policy">
            <div className={style.policyContent} data-reveal>
                <h3>Appointment, Cancellation & Rescheduling Policy</h3>
                <p>
                Please provide at least 24 hours’ notice for cancellations or rescheduling. 
                Appointments cancelled or changed within 24 hours may be subject to a 
                cancellation fee of up to 50% of the booked service.
                </p>
                <p>
                Our team offers personalized guidance at every step, helping you choose the 
                style, treatment, or look that suits you best, whether for everyday elegance 
                or a special occasion.
                </p>
            </div>
            </section>
        </>
    )
}
