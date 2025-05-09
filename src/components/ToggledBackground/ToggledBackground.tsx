"use-client";
import * as React from "react";
import ShootingStar from "../ShootingStar";

type ToggledBackgroundProp = {
  blobUrl: string | null;
};

function ToggledBackground({ blobUrl }: ToggledBackgroundProp) {
  return (
    <div className="fixed w-screen h-screen inset-0 -z-10 overflow-hidden">
      {blobUrl ? (
        <>
          <ShootingStar duration={8000} imageUrl={blobUrl} />
          <ShootingStar
            duration={10000}
            offset={{ x: "1/4" }}
            imageUrl={blobUrl}
          />
          <ShootingStar
            duration={5000}
            delay={500}
            offset={{ x: "1/2" }}
            imageUrl={blobUrl}
          />
          <ShootingStar
            duration={7000}
            delay={1000}
            offset={{ x: "3/4" }}
            imageUrl={blobUrl}
          />
          <ShootingStar
            duration={8000}
            delay={3000}
            offset={{ y: "1/4" }}
            imageUrl={blobUrl}
          />
          <ShootingStar
            duration={9000}
            offset={{ y: "1/2" }}
            imageUrl={blobUrl}
          />
          <ShootingStar
            duration={6000}
            delay={1000}
            offset={{ y: "3/4" }}
            imageUrl={blobUrl}
          />
        </>
      ) : (
        <>
          <ShootingStar duration={8000} />
          <ShootingStar duration={10000} offset={{ x: "1/8" }} />
          <ShootingStar duration={4000} delay={3000} offset={{ x: "1/4" }} />
          <ShootingStar duration={5000} offset={{ x: "3/8" }} />
          <ShootingStar duration={4000} delay={1000} offset={{ x: "1/2" }} />
          <ShootingStar duration={6000} offset={{ x: "5/8" }} />
          <ShootingStar duration={7000} delay={2000} offset={{ x: "3/4" }} />
          <ShootingStar duration={4000} delay={500} offset={{ x: "7/8" }} />
          <ShootingStar duration={2000} offset={{ y: "1/8" }} />
          <ShootingStar duration={8000} delay={500} offset={{ y: "1/4" }} />
          <ShootingStar duration={4000} delay={3000} offset={{ y: "3/8" }} />
          <ShootingStar duration={8000} delay={3000} offset={{ y: "1/2" }} />
          <ShootingStar duration={8000} offset={{ y: "5/8" }} />
          <ShootingStar duration={5000} delay={3000} offset={{ y: "3/4" }} />
          <ShootingStar duration={7000} delay={1000} offset={{ y: "7/8" }} />
          <ShootingStar duration={5000} offset={{ x: "-1/8", y: "-1/8" }} />
          <ShootingStar
            duration={7000}
            delay={500}
            offset={{ x: "-1/8", y: "-1/4" }}
          />
          <ShootingStar
            duration={6000}
            delay={500}
            offset={{ x: "-1/8", y: "-3/8" }}
          />
          <ShootingStar
            duration={5000}
            delay={500}
            offset={{ x: "-1/8", y: "-1/2" }}
          />
          <ShootingStar
            duration={7000}
            delay={100}
            offset={{ x: "-1/4", y: "1/8" }}
          />
          <ShootingStar duration={6000} offset={{ x: "-1/4", y: "1/4" }} />
          <ShootingStar
            duration={8000}
            delay={500}
            offset={{ x: "-1/4", y: "3/8" }}
          />
          <ShootingStar
            duration={6000}
            delay={1000}
            offset={{ x: "-1/4", y: "1/2" }}
          />
          <ShootingStar
            duration={7000}
            delay={200}
            offset={{ x: "-1/4", y: "-1/8" }}
          />
          <ShootingStar duration={6000} offset={{ x: "-1/4", y: "-1/4" }} />
          <ShootingStar
            duration={8000}
            delay={100}
            offset={{ x: "-1/4", y: "-3/8" }}
          />
          <ShootingStar
            duration={6000}
            delay={300}
            offset={{ x: "-1/4", y: "-1/2" }}
          />
          <ShootingStar
            duration={7000}
            delay={1500}
            offset={{ x: "-3/8", y: "-1/8" }}
          />
          <ShootingStar duration={8000} offset={{ x: "-3/8", y: "-1/4" }} />
          <ShootingStar
            duration={5000}
            delay={1000}
            offset={{ x: "-3/8", y: "-3/8" }}
          />
          <ShootingStar
            duration={6000}
            delay={500}
            offset={{ x: "-3/8", y: "-1/2" }}
          />
          <ShootingStar duration={5000} offset={{ x: "1/4", y: "-1/8" }} />
          <ShootingStar duration={8000} offset={{ x: "1/4", y: "-1/4" }} />
          <ShootingStar duration={6000} offset={{ x: "1/4", y: "-3/8" }} />
          <ShootingStar duration={9000} offset={{ x: "1/4", y: "-1/2" }} />
          <ShootingStar duration={7000} offset={{ x: "3/8", y: "-1/4" }} />
          <ShootingStar duration={7000} offset={{ x: "3/8", y: "-3/8" }} />
          <ShootingStar duration={5000} offset={{ x: "3/8", y: "-1/2" }} />
        </>
      )}
    </div>
  );
}

export default ToggledBackground;
