import { getAllCharacters } from "../../redux/CharterAction";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../card/card";
import style from "./cardCont.module.css";
import { useState } from "react";
import Paged from "../paged/paged";

const CardCont = () => {
	const dispatch = useDispatch();
	const [view, setView] = useState(false);
	const char = useSelector((state) => state.characts.charact);
	const currentPage = useSelector((state) => state.characts.currentPage);

	const [cardPage, setCardPage] = useState(10);
	const [order, setOrder] = useState("");
	const indexOfTheLastChar = currentPage * cardPage;
	const indexOfFirstChar = indexOfTheLastChar - cardPage;
	const currentCard = char.slice(indexOfFirstChar, indexOfTheLastChar);

	useEffect(() => {
		if(!char.length) dispatch(getAllCharacters())
	}, [dispatch, view]);

	const handleView = () => {
		setView(!view);
	};

	if (view) {
		return (
			<div className={style.cont}>
				<section className={style.contCard}>
					{currentCard?.map((char, i) => (
						<Card
							key={i}
							id={char.id}
							name={char.name}
							image={char.image}
							species={char.species}
						/>
					))}
				</section>
				<Paged
					cardPage={cardPage}
					currentPage={currentPage}
				/>
				<button onClick={handleView} className={style.btn}>
					View Less
				</button>
			</div>
		);
	} else
		return (
			<div>
				<section className={style.contReduce}>
					{currentCard?.map((char, i) => (
						<Card
							key={i}
							id={char.id}
							name={char.name}
							image={char.image}
							species={char.species}
						/>
					))}
				</section>
				<button onClick={handleView} className={style.btn}>
					View More
				</button>
			</div>
		);
};
export default CardCont;
