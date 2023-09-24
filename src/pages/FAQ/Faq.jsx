import Accordion from "../../components/Accordion";

const Faq = () => {
    return (
        <>
            <section className="faq__section">
                <div className="faq__heading">
                    <h1>Questions? Look here.</h1>
                    <p>Cant find an answer? just lorem ipsum dolor</p>
                </div>
                <div>
                    <Accordion title="Lorem ipsum dolor" body = "Insert Body Content HerInsert Body Content HerInsert Body Content HerInsert Body Content HerInsert Body Content HerInsert Body Content HerInsert Body Content HerInsert Body Content HerInsert Body Content HerInsert Body Content Here" />
                    <Accordion title="Lorem ipsum dolor" body = "Insert Body Content Here" />
                    <Accordion title="Lorem ipsum dolor" body = "Insert Body Content Here" />
                    <Accordion title="Lorem ipsum dolor" body = "Insert Body Content Here" />
                    <Accordion title="Lorem ipsum dolor" body = "Insert Body Content Here" />
                </div>
            </section>
        </>
    );
};

export default Faq;