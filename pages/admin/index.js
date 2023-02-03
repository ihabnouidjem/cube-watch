import axios from "axios";
import Image from "next/image";
import react, { useEffect, useRef, useState } from "react";

export default function Admin() {
  const [inputStatus, setInputStatus] = useState({
    first: 0,
    second: 0,
    third: 0,
    img: 0,
    textarea: 0,
  });
  const [errMSG, setErrMSG] = useState("");
  const [successMSG, setSuccessMSG] = useState("");
  const [image, setImage] = useState(null);
  const [company, setCompany] = useState(null);
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);
  const [description, setDescription] = useState(null);
  const [imageId, setImageId] = useState(null);
  const [createObjectUrl, setCreateObjectUrl] = useState(null);
  // -- useEffect -----------------------------------------------
  useEffect(() => {
    const interval = setInterval(() => {
      setSuccessMSG("");
    }, 5000);
    return () => clearInterval(interval);
  }, [successMSG]);
  //-- useRef ------------------------------------------------------------------------
  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);
  const thirdInputRef = useRef(null);
  const imageInputRef = useRef(null);
  const textareaInputRef = useRef(null);
  const onChangePictureId = (event) => {
    setImageId(event.target.value);
  };

  const onChangePicture = (event) => {
    if (event.target.files && event.target.files[0]) {
      setInputStatus((prevInput) => {
        return {
          ...prevInput,
          img: 1,
        };
      });
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectUrl(URL.createObjectURL(i));
    }
  };

  const submitPicture = async () => {
    if (!firstInputRef.current || !firstInputRef.current.value) {
      setInputStatus((prevInput) => {
        return {
          ...prevInput,
          first: -1,
        };
      });
    }
    if (!secondInputRef.current || !secondInputRef.current.value) {
      setInputStatus((prevInput) => {
        return {
          ...prevInput,
          second: -1,
        };
      });
    }
    if (!thirdInputRef.current || !thirdInputRef.current.value) {
      setInputStatus((prevInput) => {
        return {
          ...prevInput,
          third: -1,
        };
      });
    }
    if (!imageInputRef.current || !imageInputRef.current.value) {
      setInputStatus((prevInput) => {
        return {
          ...prevInput,
          img: -1,
        };
      });
    }
    if (!textareaInputRef.current || !textareaInputRef.current.value) {
      setInputStatus((prevInput) => {
        return {
          ...prevInput,
          textarea: -1,
        };
      });
    }
    if (
      name &&
      company &&
      price &&
      description &&
      image &&
      image.type.includes("image")
    ) {
      const body = new FormData();
      body.append("name", name);
      body.append("company", company);
      body.append("price", price);
      body.append("file", image);
      body.append("description", description);
      await axios
        .post("/api/products", body, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          setName(null);
          setCompany(null);
          setPrice(null);
          setImage(null);
          setDescription(null);
          setCreateObjectUrl(null);
          firstInputRef.current.value = "";
          secondInputRef.current.value = "";
          thirdInputRef.current.value = "";
          textareaInputRef.current.value = "";
          imageInputRef.current.value = "";
          setSuccessMSG("product added successfuly");
        })
        .catch((err) => console.log(err));
      setErrMSG("");
    } else if (image && !image.type.includes("image")) {
      setErrMSG("file you entered is not an image");
      setImage(null);
      setCreateObjectUrl(null);
      setInputStatus((prevInput) => {
        return {
          ...prevInput,
          img: -1,
        };
      });
      imageInputRef.current.value = "";
    } else if (!name || !company || !price || !description || !image) {
      setErrMSG("please enter all fields");
      setImage(null);
      setImageId(null);
      setCreateObjectUrl(null);
      firstInputRef.current.value = "";
    }
  };
  return (
    <div className="admin">
      <div className="admin-newproduct">
        <h1 className="admin-header">Add New Product</h1>

        {errMSG ? (
          <p className="admin-error">{errMSG}</p>
        ) : successMSG ? (
          <p className="admin-success">{successMSG}</p>
        ) : (
          ""
        )}
        <div className="admin-newproduct-form">
          <input
            ref={firstInputRef}
            className={
              inputStatus.first != -1
                ? "admin-input One grey-input"
                : "admin-input One empty-input"
            }
            type="text"
            placeholder="name"
            onChange={(e) => {
              setName(e.target.value);
              setInputStatus((prevInput) => {
                return {
                  ...prevInput,
                  first: 1,
                };
              });
            }}
          />
          <input
            ref={secondInputRef}
            className={
              inputStatus.second != -1
                ? "admin-input Two grey-input"
                : "admin-input Two empty-input"
            }
            type="text"
            placeholder="company"
            onChange={(e) => {
              setCompany(e.target.value);
              setInputStatus((prevInput) => {
                return {
                  ...prevInput,
                  second: 1,
                };
              });
            }}
          />
          <input
            ref={thirdInputRef}
            className={
              inputStatus.third != -1
                ? "admin-input Three grey-input"
                : "admin-input Three empty-input"
            }
            type="text"
            placeholder="price"
            onChange={(e) => {
              setPrice(e.target.value);
              setInputStatus((prevInput) => {
                return {
                  ...prevInput,
                  third: 1,
                };
              });
            }}
          />
          <textarea
            ref={textareaInputRef}
            className={
              inputStatus.textarea != -1
                ? "admin-textarea grey-input"
                : "admin-textarea empty-input"
            }
            placeholder="description ..."
            onChange={(e) => {
              setDescription(e.target.value);
              setInputStatus((prevInput) => {
                return {
                  ...prevInput,
                  textarea: 1,
                };
              });
            }}
          ></textarea>
          <div className="admin-img">
            {createObjectUrl ? (
              <Image
                className={inputStatus.img != -1 ? "grey-input" : "empty-input"}
                src={createObjectUrl}
                alt=""
                width={500}
                height={500}
              />
            ) : (
              <Image
                className={inputStatus.img != -1 ? "grey-input" : "empty-input"}
                src={"/uploadImage.jpg"}
                alt=""
                width={500}
                height={500}
              />
            )}
          </div>
          <input
            ref={imageInputRef}
            className={"admin-img-input"}
            type="file"
            name="myImage"
            onChange={onChangePicture}
          />
          <button onClick={submitPicture}>add photo</button>
        </div>
      </div>
    </div>
  );
}
