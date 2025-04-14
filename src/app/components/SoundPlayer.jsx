"use client";
import React, { useEffect, useRef, useState } from "react";
import p5 from "p5";
import "p5/lib/addons/p5.sound";

const SoundPlayer = ({ audioFile }) => {
  const sketchRef = useRef(null);
  const [sound, setSound] = useState(null);

  useEffect(() => {
    const sketch = (p) => {
      p.preload = () => {
        const newSound = p.loadSound(audioFile, () => {
          setSound(newSound); // Store sound in state once loaded
        });
      };

      p.setup = () => {
        p.createCanvas(400, 400);
        p.background(220);
      };
    };

    const p5Instance = new p5(sketch, sketchRef.current);
    return () => p5Instance.remove();
  }, [audioFile]);

  return (
    <div>
      <div ref={sketchRef}></div>
      <button onClick={() => sound && !sound.isPlaying() && sound.play()}>
        Play
      </button>
      <button onClick={() => sound && sound.stop()}>Stop</button>
    </div>
  );
};

export default SoundPlayer;
