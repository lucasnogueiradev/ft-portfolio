import { FormEvent, useState, useContext } from "react";
import Modal from "react-modal";
import { Button, ButtonTransaction, Form } from "./NewModal";

import React from "react";

interface NewtransactionProps {
  isOpen: boolean;
  OnRequestClose: () => void;
}

export function NewtransactionModal({
  isOpen,
  OnRequestClose,
}: NewtransactionProps) {
  const [type, SetType] = useState("");
  const [title, SetTitle] = useState("");
  const [amount, SetAmount] = useState(Number);
  const [category, SetCategory] = useState("");

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={OnRequestClose}
      className="modal-content"
      overlayClassName="react-modal"
    >
      <button type="button" onClick={OnRequestClose}>
        <img src="close.svg" alt="fechar modal" />
      </button>
      <Form>
        <h2>Cadastro</h2>

        <input
          placeholder="Título"
          type="text"
          value={title}
          onChange={(event) => SetTitle(event.target.value)}
        />
        <input
          placeholder="valor"
          type="number"
          value={amount}
          onChange={(event) => SetAmount(Number(event.target.value))}
        />

        <ButtonTransaction>
          <Button
            onClick={() => {
              SetType("deposit");
            }}
            isActive={type === "deposit"}
            activeColor="red"
          >
            <img src="close.svg" alt="" />
            <span> Entradas</span>
          </Button>

          <Button
            onClick={() => {
              SetType("withdraw");
            }}
            isActive={type === "withdraw"}
            activeColor="green"
          >
            <img src="close.svg" alt="" />
            <span> Sadas</span>
          </Button>
        </ButtonTransaction>

        <input
          placeholder="Categoria"
          type="text"
          value={category}
          onChange={(event) => SetCategory(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Form>
    </Modal>
  );
}
