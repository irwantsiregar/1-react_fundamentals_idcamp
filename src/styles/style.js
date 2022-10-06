h1 {
  font - family: sans - serif;
  margin - bottom: 8px;
}

.on,
.off {
  display: flex;
  align - items: center;
  padding: 16px;
  border - radius: 8px;
  transition: background - color ease -in -out 0.3s;
}

.off {
  background - color: black;
}

.on {
  background - color: rgb(185, 185, 139);
}

.on > button,
.off > button {
  padding: 8px;
  background - color: transparent;
  border: 0;
  font - size: 32px;
  cursor: pointer;
}

.off > button {
  color: white;
}

.on > button {
  color: yellow;
}
