import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';

const style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move'
}

const Card = ({ id, text, index, moveCard }) => {
  console.log(moveCard);

  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover(item, monitor) {
      if(!ref.current) {
        return;
      }

      const dragIndex   = item.index;
      const hoverIndex  = index;

      if(dragIndex === hoverIndex) {
        // ドラッグ先が自分自身の場合は、入れ替えをしない
        return;
      }

      // 矩形を定義する
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      // 縦の中心を取得する
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // マウスの位置を定義する
      const clientOffset = monitor.getClientOffset();

      // トップへのピクエル数を取得する
      const hoverClientY = clientOffset.y = hoverBoundingRect.top;

      // マウスがアイテムの高さの半分移動したときのみ動作する。
      // 下方向にドラッグしたら、カーソルが下50% 移動したら動作する。
      // 上方向にドラッグしたら、カーソルが上50% 移動したら動作する。

      // 下方向にドラッグ
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // 上方向にドラッグ
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // TODO:
    }
  });

  const [{ isDragging }, drag] = useDrag({
    item:    { type: ItemTypes.CARD, id, index },
    collect: (monitor) => ({ isDragging: monitor.isDragging() })
  });

  const opacity = isDragging ? 0 : 1;

  return (
    <div>id={id}, text={text}, index={index}, moveCard=</div>
  )
}

export default Card;

