import React from "react";
import styles from './textmessage.module.css';
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useForm } from "react-hook-form";
import { ITextMessage } from "../../app/core/textmessage.model";
import useYupValidationResolver from "../../app/components/forms/resolver";
import { schema } from "./schema/textmessage.schema";
import { deleteText, insertText } from "./redux/testmessage.slice";
import { v4 as uuid } from 'uuid';

const TextMessageComponent: React.FC = () => {
    const dispatch = useAppDispatch();
    const { listMessage } = useAppSelector(state => state.textMessage);
    const { register, handleSubmit,reset, formState: { errors } } = useForm<ITextMessage>({
        mode: "all",
        resolver: useYupValidationResolver(schema)
    });

    const InsertMessage = handleSubmit(async (data) => {
        data.id = uuid();
        await dispatch(insertText(data));
        alert(`Insert text ${data.text}`);
        reset();
    });

    const DeleteMessage = async (textMessage: ITextMessage) => {
        await dispatch(deleteText(textMessage));
    }

    return (
        <React.Fragment>
            <div className={styles.container}>
                <div className="card_container">
                    <h1>TextMessage App</h1>
                    <h3>Type a message!</h3>
                    <div className="form_contaniner">
                        <input {...register("text")} />
                        {errors.text && <span>This field is required</span>}
                        <button onClick={InsertMessage}>
                            Insert
                        </button>
                    </div>
                    <div className="list_message">
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        Id
                                    </th>
                                    <th>
                                        Message
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {listMessage && listMessage.map(text => (
                                    <tr>
                                        <td>
                                            {text.id}
                                        </td>
                                        <td>
                                            {text.text}
                                        </td>
                                        <td>
                                            <button onClick={() => DeleteMessage(text)}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}

export default TextMessageComponent;