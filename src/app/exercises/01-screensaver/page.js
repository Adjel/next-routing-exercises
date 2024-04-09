import React from "react";
import Link from "next/link";

function ScreenSaverExercise() {
  return (
    <ul>
      <Link href="01-screensaver/pink">
        <li>Pink</li>
      </Link>
      <Link href="01-screensaver/red">
        <li>Red</li>
      </Link>
      <Link href="01-screensaver/blue">
        <li>Blue</li>
      </Link>
      <Link href="01-screensaver/white">
        <li>White</li>
      </Link>
      <Link href="01-screensaver/Yellow">
        <li>Yellow</li>
      </Link>
    </ul>
  );
}

export default ScreenSaverExercise;
