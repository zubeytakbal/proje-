from manim import *

class QuadraticSolution(Scene):
    def construct(self):
        self.camera.background_color = WHITE

        # Başlık
        title = MathTex(r"\text{Solve for } x", font_size=52, color=BLACK)
        title.to_edge(UP, buff=0.6)
        underline = Line(
            title.get_left(), title.get_right(), color=BLUE, stroke_width=3
        ).next_to(title, DOWN, buff=0.1)
        self.play(Write(title), Create(underline))
        self.wait(0.8)

        # Adım 1: Denklem
        label1 = MathTex(r"\text{Equation:}", font_size=36, color=GRAY_D)
        label1.to_edge(LEFT, buff=1).shift(UP * 1.5)
        eq = MathTex(r"x^2 - 5x + 6 = 0", font_size=60, color=BLACK)
        eq.next_to(label1, RIGHT, buff=0.4)
        self.play(Write(label1))
        self.play(Write(eq))
        self.wait(1)

        # Adım 2: Çarpanlara ayırma
        label2 = MathTex(r"\text{Factor:}", font_size=36, color=GRAY_D)
        label2.to_edge(LEFT, buff=1).shift(UP * 0.2)
        step1 = MathTex(r"(x - 2)(x - 3) = 0", font_size=60, color=BLUE_D)
        step1.next_to(label2, RIGHT, buff=0.4)
        arrow1 = Arrow(eq.get_bottom(), step1.get_top(), color=GRAY, buff=0.15, stroke_width=3)
        self.play(GrowArrow(arrow1))
        self.play(Write(label2), Write(step1))
        self.wait(1)

        # Adım 3: Çözümler
        label3 = MathTex(r"\text{Solutions:}", font_size=36, color=GRAY_D)
        label3.to_edge(LEFT, buff=1).shift(DOWN * 1.2)

        sol1 = MathTex(r"x = 2", font_size=60, color=GREEN_D)
        sol2 = MathTex(r"x = 3", font_size=60, color=GREEN_D)
        sol1.shift(DOWN * 1.2 + LEFT * 1.5)
        sol2.shift(DOWN * 1.2 + RIGHT * 1.5)

        self.play(Write(label3))
        self.play(Write(sol1))
        self.wait(0.4)
        self.play(Write(sol2))
        self.wait(0.8)

        # Çerçeveler
        box1 = SurroundingRectangle(sol1, color=GREEN_D, buff=0.25, stroke_width=3)
        box2 = SurroundingRectangle(sol2, color=GREEN_D, buff=0.25, stroke_width=3)
        self.play(Create(box1), Create(box2))
        self.wait(1)

        # Kontrol işareti
        check = MathTex(r"\checkmark \text{ Answer}", font_size=44, color=GREEN_D)
        check.to_edge(DOWN, buff=0.5)
        self.play(Write(check))
        self.wait(2)
